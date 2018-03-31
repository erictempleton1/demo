<template>
    <md-list-item>
    <md-menu md-size="medium" :md-offset-x="127" :md-offset-y="-36">
        <md-button md-menu-trigger>Options</md-button>
            <md-menu-content>
                <md-menu-item>
                    <img src="@/assets/ic_build_black_48px.svg">
                    Build
                </md-menu-item>
                <md-menu-item>
                    <img src="@/assets/ic_delete_black_48px.svg">
                    Clear
                </md-menu-item>
            </md-menu-content>
        </md-menu>
    </md-list-item>
</template>

<script>
export default {
  name: 'SideBarOptions',
};
</script>
