export const products = [
  {
    id: "phantom",
    name: "Phantom X75",
    subName: "Precision. Perfected.",
    price: "₹6,999",
    description: "Hot-Swappable • RGB • Gasket Mounted",
    folderPath: "/images/phantom",
    themeColor: "#00E5FF",
    gradient: "linear-gradient(135deg, #0F172A 0%, #00E5FF 100%)",
    features: [
      {
        title: "Hot Swappable",
        description: "Customize switches without soldering",
        icon: "⚙️"
      },
      {
        title: "South Facing RGB",
        description: "Dynamic lighting designed to match your workflow",
        icon: "💡"
      },
      {
        title: "Gasket Mount",
        description: "Premium mounting for enhanced acoustics",
        icon: "🎧"
      },
      {
        title: "CNC Aluminum Frame",
        description: "Aerospace-grade aluminum construction",
        icon: "🏗️"
      },
      {
        title: "Wireless Connectivity",
        description: "Low latency Bluetooth 5.3",
        icon: "📡"
      },
      {
        title: "Premium PBT Keycaps",
        description: "Double-shot legends with UV coating",
        icon: "⌨️"
      }
    ],
    stats: [
      { label: "Polling Rate", val: "1000Hz", icon: "⚡" },
      { label: "Latency", val: "1ms", icon: "🎯" },
      { label: "Battery", val: "8000mAh", icon: "🔋" },
      { label: "Durability", val: "80M Keystrokes", icon: "♾️" }
    ],
    switchOptions: [
      { name: "Red Switches", color: "#FF006E", type: "Linear" },
      { name: "Brown Switches", color: "#8B4513", type: "Tactile" },
      { name: "Blue Switches", color: "#00A3FF", type: "Clicky" }
    ],
    overlayText: [
      {
        section: 1,
        title: "Mechanical Precision",
        subtitle: "Every keystroke engineered for speed and consistency."
      },
      {
        section: 2,
        title: "Premium Aluminum Build",
        subtitle: "Crafted from aerospace-grade aluminum."
      },
      {
        section: 3,
        title: "RGB Illumination",
        subtitle: "Dynamic lighting designed to match your workflow."
      },
      {
        section: 4,
        title: "Hot-Swappable Freedom",
        subtitle: "Customize switches without soldering."
      }
    ]
  }
];
