import Vue from 'vue'
import ability from './ability';
var EaACL =new ability();


Vue.directive('can', function (el, bindings, vnode) {
    const behaviour = bindings.modifiers.disable ? 'disable' : 'hide'
    // const ok = ability.can(bindings.arg, bindings.value)
    const ok = EaACL.checkAbility(bindings.arg, bindings.value)
    // console.log('directive',bindings.arg,bindings.value,bistunACL.checkAbility(bindings.arg, bindings.value))
    if (!ok) {
      if (behaviour === 'hide') {
        const comment = document.createComment(' ');
        Object.defineProperty(comment, 'setAttribute', {
        value: () => undefined,
        });
        vnode.elm = comment;
        vnode.text = ' ';
        vnode.isComment = true;
        vnode.context = undefined;
        vnode.tag = undefined;
        vnode.data.directives = undefined;

        if (vnode.componentInstance) {
        vnode.componentInstance.$el = comment;
        }

        if (el.parentNode) {
        el.parentNode.replaceChild(comment, el);
        }
      } else if (behaviour === 'disable') {
        el.disabled = true
      }
    }
})