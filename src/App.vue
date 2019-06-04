<template>
    <div class="Yz-app">
        <div class="Yz-app-header">
            <YzHeader ></YzHeader>
        </div>
        <div class="Yz-app-main">
            <router-view></router-view>
        </div>
        <div class="Yz-app-footer">
            <YzFooter></YzFooter>
        </div>
    </div>
</template>

<script>
    import YzHeader from '@/components/YzHeader'
    import YzFooter from '@/components/YzFooter'
    import { Toast } from 'mint-ui'
    export default {
        components: {
            YzHeader,
            YzFooter
        },
        created () {
            Toast({
                message: '操作成功',
                iconClass: 'icon icon-success'
            })
        }
    }
</script>

<style lang="scss">
@font-face {
    font-family: 'iconfont';  /* project id 1228122 */
    src: url('//at.alicdn.com/t/font_1228122_0i7f3toiw8rg.eot');
    src: url('//at.alicdn.com/t/font_1228122_0i7f3toiw8rg.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1228122_0i7f3toiw8rg.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1228122_0i7f3toiw8rg.woff') format('woff'),
    url('//at.alicdn.com/t/font_1228122_0i7f3toiw8rg.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1228122_0i7f3toiw8rg.svg#iconfont') format('svg');
}
.icon {
    font-family: 'iconfont';
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line-height: 1;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
html,
body {
    height: 100%;
    .Yz-app {
        height: 100%;
        display: flex;
        flex-direction: column;
        &-main {
            flex: 1;
        }
    }
}

</style>
