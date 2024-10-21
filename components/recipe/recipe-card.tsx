"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { toast } from "sonner"

import { Recipe } from "@/types/types"
import { saveRecipe } from "@/lib/actions"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { macroInfo, recipeInfo } from "@/components/recipe/recipe-constants"
import { SaveRecipeButton } from "@/components/recipe/save-recipe-button"

interface GeneratedRecipeContentProps {
  recipe: Recipe
}

export function RecipeCard({ recipe }: GeneratedRecipeContentProps) {
  let macroChartData: { label: string; value: any }[] = [];
  if (macroInfo.length !== 0) {
    // macroChartData = macroInfo.map((macro) => ({
    //   label: macro.label,
    //   value: recipe?.macros[macro.value],
    // }))
  }

  //@ts-ignore
  console.log(recipe.shoes);

  const onSaveRecipe = async () => {
    toast.promise(saveRecipe(recipe), {
      loading: "Saving...",
      success: () => "Cool! Recipe saved successfully.",
      error: "Oh No! Sign-In to save recipes!",
    })
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{recipe?.title}</CardTitle>
        <CardDescription>{recipe?.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 text-sm">
        {/* <div className="grid space-y-6 rounded-lg border p-3 md:grid-cols-2 md:space-x-4 md:space-y-0"> */}
        {/* Recipe Info Section */}
        {/* <div className="grid grid-cols-2 gap-4 md:gap-0">
            <div className="col-span-2 mb-2 grid">
              <h3 className="text-lg font-semibold">Overview</h3>
            </div>
            {recipeInfo.map((info, index) => (
              <div key={index} className="flex gap-2 text-muted-foreground ">
                {info.icon}
                <span>
                  {recipe[info.value]} {info.additionalText}
                </span>
              </div>
            ))}
          </div> */}
        {/* Macros BarChart Section */}
        {/* <div className="grid grid-cols-1 gap-4 transition-all md:gap-0">
            <h3 className="text-lg font-semibold">Macros</h3>
            <ResponsiveContainer width="100%" height={75}>
              <BarChart data={macroChartData} barCategoryGap="20%">
                <XAxis
                  dataKey="label"
                  stroke="#94a3b8"
                  fontSize={12}
                  height={15}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#94a3b8"
                  fontSize={12}
                  width={30}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}g`}
                />
                <Bar
                  dataKey="value"
                  fill="currentColor"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div> */}
        {/* </div> */}
        {/* Ingredients Section */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Your Results</h3>
          <ol className="list-disc pl-6">
            {/* @ts-ignore */}
            {recipe && recipe.shoes && recipe.shoes.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* @ts-ignore */}
                {recipe.shoes.map((shoe: { title: string; price: number; shop: string; image_url: string }, i: number) => {
                  return (
                    <div key={i} className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow">
                      <img
                        src={shoe.image_url}
                        alt={shoe.title}
                        className="w-full h-48 object-cover rounded-md mb-4"
                      />
                      <h3 className="text-lg font-semibold mb-2">{shoe.title}</h3>
                      <p className="text-sm text-gray-500 mb-1">Shop: {shoe.shop}</p>
                      <p className="text-sm text-gray-700 mb-2">Price: €{shoe.price}</p>
                      <a
                        href="#"
                        className="text-blue-600 hover:underline text-sm"
                      >
                        View Details
                      </a>
                    </div>
                  );
                })}
              </div>
            )}


          </ol>
        </div>
        {/* Instructions Section */}
        {/* <div className="space-y-2">
          <h3 className="text-lg font-semibold">Instructions</h3>
          <ol className="list-decimal pl-6">
            {recipe?.instructions.map(
              (
                instruction: { step: number; description: string | string },
                i: number
              ) => {
                return (
                  <li key={`${instruction}-${i}`}>{instruction.description}</li>
                )
              }
            )}
          </ol>
        </div> */}
      </CardContent>
      <CardFooter>
        <SaveRecipeButton onClick={onSaveRecipe} />
      </CardFooter>
    </Card>
  )
}
