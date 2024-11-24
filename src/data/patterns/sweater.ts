export const sweaterPattern = {
  viewBox: "0 0 400 500",
  sections: [
    {
      id: 'body',
      name: 'Main Body',
      path: `M 150,150 
             L 250,150 
             L 270,400 
             L 130,400 
             Z`,
      paletteType: 'main'
    },
    {
      id: 'sleeve-left',
      name: 'Left Sleeve',
      path: `M 150,150 
             L 100,170 
             L 80,350 
             L 130,350 
             Z`,
      paletteType: 'accent'
    },
    {
      id: 'sleeve-right',
      name: 'Right Sleeve',
      path: `M 250,150 
             L 300,170 
             L 320,350 
             L 270,350 
             Z`,
      paletteType: 'accent'
    },
    {
      id: 'collar',
      name: 'Collar',
      path: `M 175,120 
             C 175,100 225,100 225,120
             L 225,150 
             L 175,150
             Z`,
      paletteType: 'collar'
    },
    {
      id: 'pocket',
      name: 'Pocket',
      path: `M 180,250
             L 220,250
             L 220,300
             L 180,300
             Z`,
      paletteType: 'accent'
    }
  ]
};