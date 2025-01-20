export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      Dietary: {
        Row: {
          Description: string | null
          "Field Name": string | null
        }
        Insert: {
          Description?: string | null
          "Field Name"?: string | null
        }
        Update: {
          Description?: string | null
          "Field Name"?: string | null
        }
        Relationships: []
      }
      FORMULAR: {
        Row: {
          AGE: number | null
          GENDER: Database["public"]["Enums"]["GENDER"]
          NAME: string
          WEIGHT: number | null
        }
        Insert: {
          AGE?: number | null
          GENDER: Database["public"]["Enums"]["GENDER"]
          NAME: string
          WEIGHT?: number | null
        }
        Update: {
          AGE?: number | null
          GENDER?: Database["public"]["Enums"]["GENDER"]
          NAME?: string
          WEIGHT?: number | null
        }
        Relationships: []
      }
      health_profiles: {
        Row: {
          activity_type: Database["public"]["Enums"]["activity_level"]
          age: number
          created_at: string
          current_medications: string | null
          daily_schedule: string | null
          dietary_preferences: string | null
          disliked_foods: string | null
          drugs: string | null
          favourite_foods: string | null
          food_allergies: string | null
          food_budget: string | null
          gender: Database["public"]["Enums"]["gender_type"]
          health_problems: string | null
          height: number
          id: string
          nutritional_knowledge: string | null
          plan_type: string
          preferred_training: string[] | null
          religious_restrictions: string | null
          sleep_patterns: string | null
          updated_at: string
          weight: number
        }
        Insert: {
          activity_type: Database["public"]["Enums"]["activity_level"]
          age: number
          created_at?: string
          current_medications?: string | null
          daily_schedule?: string | null
          dietary_preferences?: string | null
          disliked_foods?: string | null
          drugs?: string | null
          favourite_foods?: string | null
          food_allergies?: string | null
          food_budget?: string | null
          gender: Database["public"]["Enums"]["gender_type"]
          health_problems?: string | null
          height: number
          id?: string
          nutritional_knowledge?: string | null
          plan_type: string
          preferred_training?: string[] | null
          religious_restrictions?: string | null
          sleep_patterns?: string | null
          updated_at?: string
          weight: number
        }
        Update: {
          activity_type?: Database["public"]["Enums"]["activity_level"]
          age?: number
          created_at?: string
          current_medications?: string | null
          daily_schedule?: string | null
          dietary_preferences?: string | null
          disliked_foods?: string | null
          drugs?: string | null
          favourite_foods?: string | null
          food_allergies?: string | null
          food_budget?: string | null
          gender?: Database["public"]["Enums"]["gender_type"]
          health_problems?: string | null
          height?: number
          id?: string
          nutritional_knowledge?: string | null
          plan_type?: string
          preferred_training?: string[] | null
          religious_restrictions?: string | null
          sleep_patterns?: string | null
          updated_at?: string
          weight?: number
        }
        Relationships: []
      }
      program_types: {
        Row: {
          created_at: string
          id: string
          name: string
          subdomain: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          subdomain: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          subdomain?: string
          updated_at?: string
        }
        Relationships: []
      }
      table: {
        Row: {}
        Insert: {}
        Update: {}
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      activity_level:
        | "sedentary"
        | "lightly_active"
        | "moderately_active"
        | "very_active"
        | "extremely_active"
      GENDER: "MALE" | "FEMALE"
      gender_type: "male" | "female" | "other"
      preferred_training_type:
        | "Walking"
        | "Jogging"
        | "Running"
        | "Cycling"
        | "Swimming"
        | "Stretching"
        | "Yoga"
        | "Gym Trainings"
        | "Aerobics"
        | "Pilates"
        | "Hiking"
        | "Playing Soccer"
        | "Basketball"
        | "Tennis"
        | "Badminton"
        | "Dancing"
        | "Martial Arts"
        | "Skiing/Snowboarding"
        | "Rock Climbing"
        | "Surfing"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
