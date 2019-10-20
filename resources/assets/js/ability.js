import collect from "collect.js";
export default class ability {
    checkAbility(ability, module) {
        if (collect(window.user.roles[0].permissions).where('name', ability+'-'+module).first())
            return true;
        return false;

    }

}