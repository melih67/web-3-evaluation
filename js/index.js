new TypeIt("#Animtitle", {
    speed: 125,
    loop: true,
}).go();

new TypeIt("#companionMethods", {
    speed: 50,
    waitUntilVisible: true,
})
    .type("devo", { delay: 300 })
    .move(-3)
    .delete(1)
    .type("D")
    .move(1)
    .delete(1)
    .type("é")
    .move(null, { to: "END" })
    .type("ilez l'intégrateures")
    .pause(300)
    .delete(2)
    .type(" qui est en vus")
    .move(-2)
    .type("o")
    .move(null, { to: "END" })    
    .pause(500)
    .type(" :)")
    .go();