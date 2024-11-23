<template>
  <div class="box">
    <div class="content">
      <h1>Hello, I am Daniel Brunner</h1>
      <p>
        I'm a passionate Mobile and Web Developer with years of experience in creating dynamic and user-friendly applications.
        I specialize in building responsive websites and intuitive mobile apps using technologies like JavaScript, Vue.js, React Native, and more.
        My goal is to deliver high-quality solutions that enhance user experiences and drive business success.
      </p>
      <ul class="skills">
        <li> Mobile Development (iOS & Android)</li>
        <li> Web Development (Frontend & Backend)</li>
        <li> UI/UX Design</li>
        <li> API Integration</li>
        <li> Agile Methodologies</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

.box {
  background: radial-gradient(circle at 50% 0, #0000 25%, #42b8832a calc(10% + 2px));
  box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.274);
  padding: 20px;
  max-width: 80%;
  border-radius: 20px;
  font-family: 'Arial, sans-serif';
  color: #333;
}

.content {
  padding-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-size: 25px;
}

h1 {
  margin-bottom: 10px;
  font-size: 1.5em;
  color: #42b883;
}

p {
  text-align: center;
  margin-bottom: 15px;
  line-height: 1.6;
}

.skills {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
}

.skills li {
  margin: 5px 0;
}

</style>

<script>
export default {
  name: 'JumboTron',
};
</script>
