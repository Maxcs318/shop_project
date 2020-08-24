<template>
    <div class="col-12">
        <!-- Internet Online : {{onLine}}
        <br>
        {{this.$store.getters.getInternet_status}} -->
    </div>
</template>
<script>
export default {
    data(){
        return{
            onLine: navigator.onLine,
            showBackOnline: false
        }
    },
    methods: {
        updateOnlineStatus(e) {
            const {
                type
            } = e;
            this.onLine = type === 'online';
            this.$store.dispatch("Internet_status", this.onLine);
        }
    },
    watch: {
        onLine(v) {
            if (v) {
                this.showBackOnline = true;
                setTimeout(() => {
                    this.showBackOnline = false;
                }, 1000);
            }
        }
    },
    mounted() {
        window.addEventListener('online', this.updateOnlineStatus);
        window.addEventListener('offline', this.updateOnlineStatus);
        this.$store.dispatch("Internet_status", this.onLine);
        console.log(this.onLine)
    },
    beforeDestroy() {
        window.removeEventListener('online', this.updateOnlineStatus);
        window.removeEventListener('offline', this.updateOnlineStatus);
        // console.log(this.onLine)
    }
}
</script>
