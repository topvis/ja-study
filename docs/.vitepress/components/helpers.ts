const pallets = {
  red: { bg: "red", txt: "white" },
  green: { bg: "#29ba51", txt: "white" },
  blue: { bg: "#1f76cd", txt: "white" },
  gold: { bg: "#fec13a", txt: "black" },
} as const

export type Color = keyof typeof pallets

export function getColorStyle(color: Color) {
  const pallet = pallets[color]
  return {
    backgroundColor: pallet.bg,
    color: pallet.txt,
  }
}


