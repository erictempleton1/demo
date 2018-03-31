<template>
    <md-list-item>
    <md-menu md-size="medium" :md-offset-x="127" :md-offset-y="-36">
        <md-button md-menu-trigger>Devices</md-button>
            <md-menu-content>
                <md-menu-item>
                    <img src="@/assets/ic_videocam_black_48px.svg">
                    Camera
                </md-menu-item>
                <md-menu-item>
                    <img src="@/assets/ic_computer_black_48px.svg">
                    Client
                </md-menu-item>
                <md-menu-item>
                    <img src="@/assets/ic_phone_black_48px.svg">
                    Phone
                </md-menu-item>
                <md-menu-item>
                    <img src="@/assets/ic_router_black_48px.svg">
                    Router
                </md-menu-item>
            </md-menu-content>
        </md-menu>
    </md-list-item>
</template>

<script>
export default {
  name: 'SideBarDevices',
};
</script>
