import * as z from "zod"

export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
}

export const formSchema = z.object({
  ingredients: z.string().min(2, {
    message: "Please add at least one search term",
  }),
  travelDistance: z.number().int().min(1).max(100).optional(),
  shopType: z.enum(["local shop", "store chain", "big brand"]).optional(),
  cooking_time: z.array(z.number()).optional(),
  people: z.enum(["2", "4", "6"]).optional(),
  difficulty: z.string().optional(),
  low_calori: z.boolean().default(false).optional(),
  vegan: z.boolean().default(false).optional(),
  paleo: z.boolean().default(false).optional(),
})

export const Shoe = z.object({
  title: z.string(),
  price: z.number(),
  priceFluctuation: z.array(
    z.object({
      date: z.string(),
      price: z.number(),
    })
  ),
  shop: z.string(),
  distance_to_shop: z.number(),
  opening_hours: z.string(),
  distance_from_me: z.number(),
  image_url: z.string(),
  shop_url: z.string(),
})

export const defaultValues: FormData = {
  ingredients: "",
  cooking_time: [15],
  people: "2",
  difficulty: "Easy",
  low_calori: true,
  vegan: false,
  paleo: false,
}

export type FormData = z.infer<typeof formSchema>

export interface Recipe {
  title: string
  description: string
  cooking_time: number
  calories: number
  difficulty: string
  macros: {
    protein: number
    fats: number
    carbs: number
  }
  sneakers: Array<{ name: string; amount: number | string }>
  instructions: Array<{ step: number; description: string | string }>
}
