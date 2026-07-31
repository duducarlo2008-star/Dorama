export type Poster = {
  src: string
  title: string
}

export const posters: Poster[] = [
  { src: '/images/poster-romance-1.png', title: 'Chuva de Amor' },
  { src: '/images/poster-billionaire-1.png', title: 'O Herdeiro' },
  { src: '/images/poster-revenge-1.png', title: 'Vingança de Seda' },
  { src: '/images/poster-chinese-1.png', title: 'Palácio Proibido' },
  { src: '/images/poster-drama-1.png', title: 'Lágrimas de Abril' },
  { src: '/images/poster-romance-2.png', title: 'Primavera & Você' },
  { src: '/images/poster-billionaire-2.png', title: 'Mansão Dourada' },
  { src: '/images/poster-thriller-1.png', title: 'Névoa Vermelha' },
  { src: '/images/poster-drama-2.png', title: 'Café da Saudade' },
  { src: '/images/poster-chinese-2.png', title: 'Lua de Jade' },
  { src: '/images/poster-romance-3.png', title: 'Escritório 9' },
]

// Deterministic pick so rows differ without random hydration mismatch.
function row(...indexes: number[]): Poster[] {
  return indexes.map((i) => posters[i % posters.length])
}

export const catalogRows: { category: string; items: Poster[] }[] = [
  { category: 'Em Alta', items: row(0, 6, 3, 7, 1, 9, 5) },
  { category: 'Romance', items: row(0, 5, 10, 8, 4, 1, 3) },
  { category: 'Bilionários', items: row(1, 6, 0, 3, 10, 7, 5) },
  { category: 'Vingança & Drama', items: row(2, 7, 4, 8, 6, 0, 9) },
  { category: 'Coreanos & Chineses', items: row(3, 9, 0, 1, 5, 2, 8) },
  { category: 'Lançamentos', items: row(10, 5, 8, 2, 6, 3, 0) },
]
