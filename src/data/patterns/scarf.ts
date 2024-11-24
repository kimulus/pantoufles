export const scarfPattern = {
  viewBox: "0 0 400 500",
  sections: [
    {
      id: 'main',
      name: 'Main Body',
      path: `M 150,50
             L 250,50
             L 250,450
             L 150,450
             Z`,
      paletteType: 'main'
    },
    {
      id: 'trim-top',
      name: 'Top Trim',
      path: `M 150,50
             L 250,50
             L 250,80
             L 150,80
             Z`,
      paletteType: 'trim'
    },
    {
      id: 'trim-bottom',
      name: 'Bottom Trim',
      path: `M 150,420
             L 250,420
             L 250,450
             L 150,450
             Z`,
      paletteType: 'trim'
    }
  ]
};