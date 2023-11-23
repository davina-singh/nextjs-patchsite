const CATEGORIES = [
    { name: "Humans", catslug: "humans" },
    { name: "Animals", catslug: "animals" },
    { name: "Dalmatian Diaries", catslug: "dalmatian-diaries" },
  ];
  
  const SIBLINGS = [
    // existing posts...
    {
      title: "Spots of Trouble: Life with Sibling Dalmatians",
      slug: "spots-of-trouble",
      content: "Think having one Dalmatian is a handful? Try two! It's a non-stop circus here. They're either chasing each other's tails or conspiring to raid the kitchen. Cute but chaotic!",
      category: "dalmatian-diaries",
    },
    {
      title: "Double Trouble at the Dog Park",
      slug: "dog-park-adventures",
      content: "A trip to the dog park with my Dalmatian siblings is like directing a whirlwind. They run around like they own the place, and good luck getting them to leave when it's time!",
      category: "dalmatian-diaries",
    },
    {
      title: "The Great Dalmatian Escape",
      slug: "dalmatian-escape",
      content: "Ever tried keeping two Dalmatians fenced in? It's mission impossible. They're escape artists, I tell you. One minute they're there, the next – poof! Houdini has nothing on them.",
      category: "dalmatian-diaries",
    },
    {
      title: "Sibling Rivalry: Dalmatian Edition",
      slug: "sibling-rivalry-dalmatian",
      content: "Who knew dogs could be so competitive? Whether it's for treats, toys, or attention, my Dalmatians turn everything into a sibling rivalry. It's exhausting but endearing.",
      category: "dalmatian-diaries",
    },
  ];
  

// get all posts
// you can replace the content inside with a db call or something. 
export function getSiblings() {
    return SIBLINGS
}

// gets one of the posts by its id
export function getPostsBySlug(slug:string) {
    return SIBLINGS.find((dog) => dog.slug === slug)
}

// export function getCategory() {
//     return CATEGORIES
// }

// export function getPostsByCategory(catslug: string) {
//     return POSTS.filter((post) => post.category === catslug)
// }