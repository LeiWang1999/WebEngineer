<template>
  <div>
    <h1>This is a Profile Page</h1>
    <h2>show query</h2>
    <p>{{$route.query.name}}</p>
    <p>{{$route.query.age}}</p>
    <p>{{$route.query.height}}</p>
  </div>
</template>

<script>
export default {
  name: "Profile"
};
</script>