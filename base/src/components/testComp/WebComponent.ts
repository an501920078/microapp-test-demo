import { defineCustomElement } from 'vue'
import MyTestSFC from "./MyTest.ce.vue"

const MyTest = defineCustomElement(MyTestSFC);
export { MyTest }


export function register() {
    customElements.define('micro-mytest-view', MyTest)
}