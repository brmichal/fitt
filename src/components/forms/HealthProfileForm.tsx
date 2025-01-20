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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  gender: z.enum(["male", "female", "other"]),
  age: z.string().transform(Number).pipe(z.number().min(1).max(120)),
  weight: z.string().transform(Number).pipe(z.number().positive()),
  height: z.string().transform(Number).pipe(z.number().positive()),
  activity_type: z.enum(["sedentary", "lightly_active", "moderately_active", "very_active", "extremely_active"]),
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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gender: "male",
      activity_type: "sedentary",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { error } = await supabase
      .from('health_profiles')
      .insert([{ ...values, plan_type: planType }]);

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
    navigate('/');
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
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
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

          <FormField
            control={form.control}
            name="weight"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Weight (kg)</FormLabel>
                <FormControl>
                  <Input type="number" step="0.1" placeholder="Enter your weight" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="height"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Height (cm)</FormLabel>
                <FormControl>
                  <Input type="number" step="0.1" placeholder="Enter your height" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="activity_type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Activity Level</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select activity level" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
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