/**
 * Template {{Parser}}
 */

module.exports = (template, scope) => {
    return template.replace(/\{\{.*?\}\}/g, txt => {
      txt = txt.replace(/^\{\{|\}\}$/g, "");
      with (scope) return eval(txt);
    });
}