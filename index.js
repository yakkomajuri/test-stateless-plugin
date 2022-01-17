export function setupPlugin() {
    console.log("I'm ready")
}

export function onEvent(event) {
    console.log(event.team_id)
}