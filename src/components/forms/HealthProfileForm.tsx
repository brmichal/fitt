import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const trainingOptions = [
  "Walking",
  "Jogging",
  "Running",
  "Cycling",
  "Swimming",
  "Stretching",
  "Yoga",
  "Gym Trainings",
  "Aerobics",
  "Pilates",
  "Hiking",
  "Playing Soccer",
  "Basketball",
  "Tennis",
  "Badminton",
  "Dancing",
  "Martial Arts",
  "Skiing/Snowboarding",
  "Rock Climbing",
  "Surfing",
] as const;

const formSchema = z.object({
  gender: z.enum(["male", "female", "other"]),
  age: z.string().transform(Number).pipe(z.number().min(1).max(120)),
  weight: z.string().transform(Number).pipe(z.number().positive()),
  height: z.string().transform(Number).pipe(z.number().positive()),
  activity_type: z.enum(["sedentary", "lightly_active", "moderately_active", "very_active", "extremely_active"]),
  preferred_training: z.array(z.string()).optional(),
  daily_schedule: z.string().optional(),
  sleep_patterns: z.string().optional(),
  current_medications: z.string().optional(),
  health_problems: z.string().optional(),
  drugs: z.string().optional(),
  food_allergies: z.string().optional(),
  dietary_preferences: z.string().optional(),
  religious_restrictions: z.string().optional(),
  favourite_foods: z.string().optional(),
  disliked_foods: z.string().optional(),
  nutritional_knowledge: z.string().optional(),
  food_budget: z.string().optional(),
});

interface HealthProfileFormProps {
  planType: string;
}

export function HealthProfileForm({ planType }: HealthProfileFormProps) {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [useMetric, setUseMetric] = useState(false);
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gender: "male",
      activity_type: "sedentary",
      preferred_training: [],
    },
  });

  const getStripeCheckoutUrl = (planType: string): string => {
    switch (planType) {
      case "lifestyle-plan":
        return "https://buy.stripe.com/28ocO9b3K21L6PKaEE";
      case "performance-plan":
        return "https://buy.stripe.com/cN2bK50p66i1de8eUV";
      case "transformation-plan":
        return "https://buy.stripe.com/cN27tP4Fm9ud6PK8wy";
      default:
        return "";
    }
  };

  const convertWeight = (value: string, toMetric: boolean) => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return "";
    return toMetric
      ? (numValue * 0.453592).toFixed(1) // lb to kg
      : (numValue * 2.20462).toFixed(1); // kg to lb
  };

  const convertHeightToMetric = (feet: string, inches: string) => {
    const totalInches = (parseInt(feet) * 12) + parseInt(inches);
    return (totalInches * 2.54).toFixed(1);
  };

  const convertHeightToImperial = (cm: string) => {
    const totalInches = parseFloat(cm) / 2.54;
    const feet = Math.floor(totalInches / 12);
    const inches = Math.round(totalInches % 12);
    return { feet: feet.toString(), inches: inches.toString() };
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Convert measurements to metric before saving if they're in imperial
    const finalValues = {
      ...values,
      weight: useMetric ? values.weight : parseFloat((parseFloat(values.weight.toString()) * 0.453592).toFixed(1)),
      height: useMetric ? values.height : parseFloat(convertHeightToMetric(heightFeet, heightInches)),
    };

    const { error } = await supabase
      .from('health_profiles')
      .insert([{ ...finalValues, plan_type: planType }]);

    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was a problem submitting your form. Please try again.",
      });
      console.error('Error:', error);
      return;
    }

    toast({
      title: "Success!",
      description: "Your health profile has been submitted successfully.",
    });
    
    // Redirect to Stripe checkout after successful form submission
    const checkoutUrl = getStripeCheckoutUrl(planType);
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
    } else {
      navigate('/');
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-background border shadow-lg">
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Enter your age" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="space-y-2">
            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between items-center">
                    <FormLabel>Weight ({useMetric ? 'kg' : 'lb'})</FormLabel>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">lb</span>
                      <Switch
                        checked={useMetric}
                        onCheckedChange={(checked) => {
                          setUseMetric(checked);
                          field.onChange(convertWeight(field.value.toString(), checked));
                        }}
                      />
                      <span className="text-sm">kg</span>
                    </div>
                  </div>
                  <FormControl>
                    <Input
                      type="number"
                      step="0.1"
                      placeholder={`Enter your weight in ${useMetric ? 'kg' : 'lb'}`}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-2">
            <FormField
              control={form.control}
              name="height"
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between items-center">
                    <FormLabel>Height {useMetric ? '(cm)' : '(ft & in)'}</FormLabel>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">ft/in</span>
                      <Switch
                        checked={useMetric}
                        onCheckedChange={(checked) => {
                          setUseMetric(checked);
                          if (checked && heightFeet && heightInches) {
                            const cm = convertHeightToMetric(heightFeet, heightInches);
                            field.onChange(cm);
                          } else if (!checked && field.value) {
                            const imperial = convertHeightToImperial(field.value.toString());
                            setHeightFeet(imperial.feet);
                            setHeightInches(imperial.inches);
                            field.onChange("");
                          }
                        }}
                      />
                      <span className="text-sm">cm</span>
                    </div>
                  </div>
                  <FormControl>
                    {useMetric ? (
                      <Input
                        type="number"
                        step="0.1"
                        placeholder="Enter your height in cm"
                        {...field}
                      />
                    ) : (
                      <div className="flex gap-2">
                        <Input
                          type="number"
                          placeholder="Feet"
                          value={heightFeet}
                          onChange={(e) => {
                            setHeightFeet(e.target.value);
                            if (e.target.value && heightInches) {
                              field.onChange(convertHeightToMetric(e.target.value, heightInches));
                            }
                          }}
                        />
                        <Input
                          type="number"
                          placeholder="Inches"
                          value={heightInches}
                          onChange={(e) => {
                            setHeightInches(e.target.value);
                            if (heightFeet && e.target.value) {
                              field.onChange(convertHeightToMetric(heightFeet, e.target.value));
                            }
                          }}
                        />
                      </div>
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="activity_type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Activity Level</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select activity level" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-background border shadow-lg">
                    <SelectItem value="sedentary">Sedentary</SelectItem>
                    <SelectItem value="lightly_active">Lightly Active</SelectItem>
                    <SelectItem value="moderately_active">Moderately Active</SelectItem>
                    <SelectItem value="very_active">Very Active</SelectItem>
                    <SelectItem value="extremely_active">Extremely Active</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="preferred_training"
            render={() => (
              <FormItem>
                <FormLabel>Preferred Training Environment</FormLabel>
                <div className="grid grid-cols-2 gap-4">
                  {trainingOptions.map((item) => (
                    <FormField
                      key={item}
                      control={form.control}
                      name="preferred_training"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value || [], item])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item
                                        )
                                      )
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {item}
                            </FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 gap-6">
          <FormField
            control={form.control}
            name="daily_schedule"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Daily Schedule</FormLabel>
                <FormControl>
                  <Textarea placeholder="Describe your typical daily schedule" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="sleep_patterns"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sleep Patterns</FormLabel>
                <FormControl>
                  <Textarea placeholder="Describe your sleep patterns" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="current_medications"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current Medications</FormLabel>
                <FormControl>
                  <Textarea placeholder="List any current medications" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="health_problems"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Health Problems</FormLabel>
                <FormControl>
                  <Textarea placeholder="List any health problems" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="drugs"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Drugs/Supplements</FormLabel>
                <FormControl>
                  <Textarea placeholder="List any drugs or supplements you take" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="food_allergies"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Food Allergies/Intolerances</FormLabel>
                <FormControl>
                  <Textarea placeholder="List any food allergies or intolerances" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dietary_preferences"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Dietary Preferences</FormLabel>
                <FormControl>
                  <Textarea placeholder="Describe your dietary preferences" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="religious_restrictions"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Religious Restrictions</FormLabel>
                <FormControl>
                  <Textarea placeholder="List any religious dietary restrictions" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="favourite_foods"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Favourite Foods</FormLabel>
                <FormControl>
                  <Textarea placeholder="List your favourite foods" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="disliked_foods"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Disliked Foods</FormLabel>
                <FormControl>
                  <Textarea placeholder="List foods you dislike" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="nutritional_knowledge"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nutritional Knowledge</FormLabel>
                <FormControl>
                  <Textarea placeholder="Describe your nutritional knowledge" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="food_budget"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Food Budget</FormLabel>
                <FormControl>
                  <Textarea placeholder="Describe your food budget" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex gap-4">
          <Button type="submit">Submit</Button>
          <Button type="button" variant="outline" onClick={() => navigate(-1)}>
            Back
          </Button>
        </div>
      </form>
    </Form>
  );
}
