<template>
    <md-list-item>
    <md-menu md-size="medium" :md-offset-x="127" :md-offset-y="-36">
        <md-button md-menu-trigger>Modes</md-button>
            <md-menu-content>
                <md-menu-item>
                    <img src="@/assets/ic_touch_app_black_48px.svg">
                    Drag
                </md-menu-item>
                <md-menu-item>
                    <img src="@/assets/ic_timeline_black_48px.svg">
                    Edge
                </md-menu-item>
                <md-menu-item>
                    <img src="@/assets/ic_flash_on_black_48px.svg">
                    Layout
                </md-menu-item>
            </md-menu-content>
        </md-menu>
    </md-list-item>
</template>

<script>
export default {
  name: 'SideBarModes',
};
</script>
