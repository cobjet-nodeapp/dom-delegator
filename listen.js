var extend = require("xtend")

module.exports = listen

function listen(surface, delegator, eventName) {
    var target = delegator.target
    var id = delegator.id
    var getListener = surface.getListener

    surface.addListener(target, eventName, function (ev) {
        var listener = getListener(surface, id, ev.target, eventName)

        if (!listener) {
            return
        }

        listener.handler.handleEvent(extend(ev, {
            currentTarget: listener.currentTarget
        }))
    })
}
