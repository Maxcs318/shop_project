<template>
    <div class="footer bg-primary">
        <div class="row">
            <div class="col-12">
                FOOTER Online : {{this.$store.getters.getInternet_status}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .footer {
        z-index: 999;
        color: white;
        text-align: center;
        width: 100%;
        position: fixed;
         /* or absolute or relative*/
        /* display: block; */
        bottom: 0%;
        margin:0;
    }
</style>
