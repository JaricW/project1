let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

let pause = false;
let finalPhase = false;

class Player {
    constructor(x, y, width, height, color) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = color
    }

    draw() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

const player = new Player(190, 300, 20, 30, "blue")


class Shark {
    constructor(x, y, width, height, color, health, moves, cooldown, direction) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = color
        this.health = health
        this.moves = moves
        this.cooldown = cooldown
        this.direction = direction
    }

    draw() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    update() {
        this.draw()
        this.movement()
        this.fireLaser()

    }
    movement() {
        if (this.moves == 100) {
            this.direction = 1;
        }

        if (this.moves == 0) {
            this.direction = 0;
        }

        if (this.direction == 1) {
            this.x = this.x + 0.5
            this.moves = this.moves - 1
        }

        if (this.direction == 0) {
            this.x = this.x - 0.5
            this.moves = this.moves + 1
        }
    }
    hit() {
        this.health = this.health - 1
    }
    fireLaser() {
        if (this.cooldown == 0) {
            lasers.push(new Laser(this.x + 10, this.y + 20, "yellow", -5, 0, 10, 6))
            this.cooldown = this.cooldown + 50;
        } else {
            this.cooldown = this.cooldown - 1;
        }

    }
}


let sharkMoveRightB = Boolean;

let enemyShoot = true;


const shark = new Shark(185, 100, 30, 20, "red", 5, 100, 1)
const sharks = []

class Whale {
    constructor(x, y, width, height, color, health, moves, cooldown, direction) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = color
        this.health = health
        this.moves = moves
        this.cooldown = cooldown
    }

    draw() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    update() {
        this.draw()
        this.movement()
        this.fireLaser()

    }
    movement() {
        if (this.moves == 0) {
            this.direction = 0;
        }

        if (this.moves == 100) {
            this.direction = 1;
        }

        if (this.moves == 150) {
            this.direction = 2;
        }

        if (this.moves == 250) {
            this.direction = 3;
        }

        if (this.moves == 300) {
            this.direction = 0;
            this.moves = 0;
        }

        if (this.direction == 0) {
            this.x = this.x + 0.5
            this.moves = this.moves + 1
        }

        if (this.direction == 1) {
            this.y = this.y - 0.5
            this.moves = this.moves + 1
        }

        if (this.direction == 2) {
            this.x = this.x - 0.5
            this.moves = this.moves + 1
        }

        if (this.direction == 3) {
            this.y = this.y + 0.5
            this.moves = this.moves + 1
        }
    }
    hit() {
        this.health = this.health - 1
    }
    fireLaser() {
        if (this.cooldown == 0) {
            lasers.push(new Laser(this.x + 16, this.y + 40, "yellow", -3, 0, 10, 6))
            lasers.push(new Laser(this.x + 16, this.y + 40, "yellow", -3, 1, 10, 6))
            lasers.push(new Laser(this.x + 16, this.y + 40, "yellow", -3, -1, 10, 6))
            this.cooldown = this.cooldown + 50;
        } else {
            this.cooldown = this.cooldown - 1;
        }

    }
}

const whale = new Whale(185, 100, 30, 20, "green", 5, 0, 1)
const whales = []

class Kraken {
    constructor(x, y, width, height, color, health, moves, cooldown, direction) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = color
        this.health = health
        this.moves = moves
        this.cooldown = cooldown
    }

    draw() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    update() {
        this.draw()
        this.movement()
        this.fireLaser()

    }
    movement() {
        if (this.moves == 0) {
            this.direction = 0;
        }

        if (this.moves == 100) {
            this.direction = 1;
        }

        if (this.moves == 150) {
            this.direction = 2;
        }

        if (this.moves == 250) {
            this.direction = 3;
        }

        if (this.moves == 300) {
            this.direction = 0;
            this.moves = 0;
        }

        if (this.direction == 0) {
            this.x = this.x + 0.5
            this.moves = this.moves + 1
        }

        if (this.direction == 1) {
            this.y = this.y - 0.5
            this.moves = this.moves + 1
        }

        if (this.direction == 2) {
            this.x = this.x - 0.5
            this.moves = this.moves + 1
        }

        if (this.direction == 3) {
            this.y = this.y + 0.5
            this.moves = this.moves + 1
        }
    }
    hit() {
        this.health = this.health - 1
    }
    fireLaser() {
        if (this.cooldown == 0) {
            if (finalPhase == true) {
            lasers.push(new Laser(90, this.y + 50, "yellow", -3, 0, 10, 6))
            lasers.push(new Laser(304, this.y + 50, "yellow", -3, 0, 10, 6))
            }
            lasers.push(new Laser(90, this.y + 50, "yellow", -3, 1, 10, 6))
            lasers.push(new Laser(90, this.y + 50, "yellow", -3, -1, 10, 6))
            lasers.push(new Laser(304, this.y + 50, "yellow", -3, 1, 10, 6))
            lasers.push(new Laser(304, this.y + 50, "yellow", -3, -1, 10, 6))
            this.cooldown = this.cooldown + 50;
        } else {
            this.cooldown = this.cooldown - 1;
        }

    }
}

const kraken = new Kraken(185, 100, 30, 20, "green", 5, 0, 1)
const krakens = []

class KrakenEye {
    constructor(x, y, width, height, color, health, moves, cooldown, direction) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = color
        this.health = health
        this.moves = moves
        this.cooldown = cooldown
    }

    draw() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    update() {
        this.draw()
        this.movement()
        this.fireLaser()

    }
    movement() {
        if (this.moves == 0) {
            this.direction = 0;
        }

        if (this.moves == 100) {
            this.direction = 1;
        }

        if (this.moves == 150) {
            this.direction = 2;
        }

        if (this.moves == 250) {
            this.direction = 3;
        }

        if (this.moves == 300) {
            this.direction = 0;
            this.moves = 0;
        }

        if (this.direction == 0) {
            this.x = this.x + 0.5
            this.moves = this.moves + 1
        }

        if (this.direction == 1) {
            this.y = this.y - 0.5
            this.moves = this.moves + 1
        }

        if (this.direction == 2) {
            this.x = this.x - 0.5
            this.moves = this.moves + 1
        }

        if (this.direction == 3) {
            this.y = this.y + 0.5
            this.moves = this.moves + 1
        }
    }
    hit() {
        this.health = this.health - 1
    }
    fireLaser() {
        if (this.cooldown == 0 && player.x >= this.x && player.x <= this.x + 20) {
            laserBeams.push(new LaserBeam(this.x + 8, this.y + 5, "yellow", -3, 0, 1, 10, 0))
            this.cooldown = this.cooldown + 300;
        } else if (this.cooldown >= 1) {
            this.cooldown = this.cooldown - 1;
        }
    }
}

const krakenEye = new KrakenEye(185, 100, 30, 20, "green", 5, 0, 1)
const krakenEyes = []

class Laser {
    constructor(x, y, color, velocityy, velocityx, height, width) {
        this.x = x
        this.y = y
        this.color = color
        this.velocityy = velocityy
        this.velocityx = velocityx
        this.height = height
        this.width = width
    }
    draw() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
    update() {
        this.draw()
        this.y = this.y - this.velocityy
        this.x = this.x - this.velocityx
    }

}

const laser = new Laser(player.x + 7, player.y + -16, "yellow", 1, 0, 6, 10)
const lasers = []

class LaserBeam {
    constructor(x, y, color, velocityy, velocityx, height, width, redact) {
        this.x = x
        this.y = y
        this.color = color
        this.velocityy = velocityy
        this.velocityx = velocityx
        this.height = height
        this.width = width
        this.redact = redact
    }
    draw() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
    update() {
        this.draw()
        this.height = this.height + this.velocityy
        this.y = this.y - this.velocityy
        if (this.redact == 1) {
            this.height = this.height - this.velocityy
        }
        if (this.height == 0) {
            this.redact = 0;
        }

    }
    reduce() {
        this.redact = 1;
    }

}

const laserBeam = new LaserBeam(this.x + 8, this.y + 5, "yellow", -3, 0, 200, 10, 0)
const laserBeams = []


function animate() {
    requestAnimationFrame(animate)
    if (pause == false) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        player.draw()
        krakenEyes.forEach(krakenEye => { krakenEye.update() })
        krakens.forEach(kraken => { kraken.update() })
        whales.forEach(whale => { whale.update() })
        sharks.forEach(shark => { shark.update() })
        lasers.forEach(laser => { laser.update() })
        laserBeams.forEach(laserBeam => { laserBeam.update() })
        playerMove()
        laserCheck()
        winner()
        spawnEnemyP2()
        spawnEnemyP3()
        spawnEnemyP32()
    }
}

let moveUp = false;
let moveDown = false;
let moveLeft = false;
let moveRight = false;



function playerMove() {
    if (moveUp == true && player.y > 120) {
        player.y = player.y - 3;
    }
    if (moveDown == true && player.y < 370) {
        player.y = player.y + 3;
    }
    if (moveLeft == true && player.x > 0) {
        player.x = player.x - 3;
    }
    if (moveRight == true && player.x < 380) {
        player.x = player.x + 3;
    }
}

function fireLaser() {
    lasers.push(new Laser(player.x + 7, player.y + -16, "yellow", 5, 0, 10, 6))
}

function spawnEnemyP1() {
    if (startPhase1 == true) {
        sharks.push(new Shark(80, 80, 30, 20, "red", 5, 80, 30, 1))
        sharks.push(new Shark(180, 60, 30, 20, "red", 5, 50, 20, 0))
        sharks.push(new Shark(280, 80, 30, 20, "red", 5, 20, 40, 1))
        return startPhase1 = false;
    }
}

function spawnEnemyP2() {

    if (defeatedSharks == 3) {
        console.log("trying!")
        whales.push(new Whale(100, 80, 40, 40, "green", 20, 100, 0, 0))
        whales.push(new Whale(300, 80, 40, 40, "green", 20, 100, 0, 0))
        defeatedSharks = 0;
    }
}

function spawnEnemyP3() {
    if (defeatedWhales == 2) {
        krakens.push(new Kraken(50, 20, 300, 40, "purple", 20, -1, 0, 0))
        krakenEyes.push(new KrakenEye(90, 60, 30, 5, "red", 20, -1, 0, 0))
        krakenEyes.push(new KrakenEye(280, 60, 30, 5, "red", 20, -1, 0, 0))
        defeatedWhales = 0;
    }
}

function spawnEnemyP32() {
    
    if (defeatedKrakenEyes == 2) {
        finalPhase = true;
        krakenEyes.push(new KrakenEye(145, 60, 30, 5, "red", 20, -1, 0, 0))
        krakenEyes.push(new KrakenEye(185, 60, 30, 5, "red", 20, -1, 0, 0))
        krakenEyes.push(new KrakenEye(225, 60, 30, 5, "red", 20, -1, 0, 0))
        defeatedKrakenEyes = 3;
    }
}
//constructor(x, y, width, height, color, health, moves, cooldown, direction)

function movement(event) {
    if (event.key === "ArrowUp") {
        event.preventDefault()
        moveUp = true;
    }
    if (event.key === "ArrowDown") {
        event.preventDefault()
        moveDown = true;
    }
    if (event.key === "ArrowLeft") {
        event.preventDefault()
        moveLeft = true;
    }
    if (event.key === "ArrowRight") {
        event.preventDefault()
        moveRight = true;
    }
}

function stopMovement(event) {
    if (event.key === "ArrowUp") {
        event.preventDefault()
        moveUp = false;
    }
    if (event.key === "ArrowDown") {
        event.preventDefault()
        moveDown = false;
    }
    if (event.key === "ArrowLeft") {
        event.preventDefault()
        moveLeft = false;
    }
    if (event.key === "ArrowRight") {
        event.preventDefault()
        moveRight = false;
    }
    if (event.key === " ") {
        event.preventDefault()
        fireLaser()
    }
}




function laserCheck() {
    lasers.forEach((laser, laserIndex) => {
        sharks.forEach((shark, sharkIndex) => {
            if (shark.y + 20 >= laser.y && shark.y <= laser.y) {
                if (shark.x - 5 <= laser.x && shark.x + 35 >= laser.x) {
                    shark.hit()
                    lasers.splice(laserIndex, 1)
                    if (shark.health == 0) {
                        sharks.splice(sharkIndex, 1)
                        defeatedSharks++
                    }
                }
            }
        })
    })
    lasers.forEach((laser, laserIndex) => {
        whales.forEach((whale, whaleIndex) => {
            if (whale.y + 40 >= laser.y && whale.y <= laser.y) {
                if (whale.x - 5 <= laser.x && whale.x + 46 >= laser.x) {
                    whale.hit()
                    lasers.splice(laserIndex, 1)
                    if (whale.health == 0) {
                        whales.splice(whaleIndex, 1)
                        defeatedWhales++
                    }
                }
            }
        })
    })
    lasers.forEach((laser, laserIndex) => {
        krakenEyes.forEach((krakenEye, krakenEyeIndex) => {
            if (krakenEye.y + 5 >= laser.y && krakenEye.y <= laser.y) {
                if (krakenEye.x - 5 <= laser.x && krakenEye.x + 36 >= laser.x) {
                    krakenEye.hit()
                    lasers.splice(laserIndex, 1)
                    if (krakenEye.health == 0) {
                        krakenEyes.splice(krakenEyeIndex, 1)
                        defeatedKrakenEyes++
                    }
                }
            }
        })
    })
    lasers.forEach((laser, laserIndex) => {
        if (player.y <= laser.y && player.y >= laser.y - 20) {
            if (player.x <= laser.x && player.x + 20 >= laser.x) {
                lasers.splice(laserIndex, 1)
                gameOverContainer.style.display =  "initial"
               pause = true;
            }

        }
    })
    lasers.forEach((laser, laserIndex) => {
        if (laser.y < 20) {
            lasers.splice(laserIndex, 1)
        }
    }
    )
    laserBeams.forEach((laserBeam, laserBeamIndex) => {
        if (laserBeam.y >= 400) {
            laserBeam.reduce()
            if (laserBeam.y >= 1000) {
                laserBeams.splice(laserBeamIndex, 1)
            }
        }
    })
    laserBeams.forEach((laserBeam, laserBeamIndex) => {
        if (player.y <= laserBeam.y && player.y >= laserBeam.y + laserBeam.height) {
            if (player.x <= laserBeam.x && player.x + 20 >= laserBeam.x) {
               gameOverContainer.style.display =  "initial"
                pause = true;
            }
        }

    })
}

let defeatedSharks = 0;
let defeatedWhales = 0;
let defeatedKrakenEyes = 0;
let startPhase1 = true;
let startPhase2 = false;
let startPhase3 = false;
let startPhase32 = false;


function winner() {
    if (defeatedKrakenEyes == 6) {
        winnerContainer.style.display =  "initial"
                pause = true;
        
    }
}

spawnEnemyP1()


function pauseGame() {
    if (pause == false) {
        return pause = true;
    }
    if (pause == true) {
        return pause = false;
    }

}


window.addEventListener("keydown", movement)
window.addEventListener("keyup", stopMovement)


/*
Component dimensions

class Whale {
    constructor(x, y, width, height, color, health, moves, cooldown) {

player
x = 20
y = 30

laser
x = 6
y = 10

shark
x = 30
y = 20


*/
