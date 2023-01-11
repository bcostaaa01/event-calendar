<template>
    <div>
       <vue-cal></vue-cal> 
    </div>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

export default {
    name: "EventCalendar",
    components: {
        VueCal
    }
}
</script>