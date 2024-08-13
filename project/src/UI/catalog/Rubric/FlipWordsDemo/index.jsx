"use client"
import React from "react";
import { FlipWords } from "./components";

export default function FlipWordsDemo() {
  const words = ["Кухонные гарнитуры", "Шкафы", "Гардеробы"];

  return <FlipWords words={words} /> 
  
}
