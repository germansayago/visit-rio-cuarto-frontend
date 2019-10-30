<template>
  <div>
    <nav>
      <ul>
        <li>
          <a href="/">home</a>
        </li>
        <li>
          <a href="/about">about</a>
        </li>
        <li>
          <a href="/events">events</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss">
  nav{
    background-color: #ddd;
    text-align: center;
    padding: 25px 0px;
    margin-bottom: 30px;
    ul{
      list-style: none;
      padding: 0px;
      li{
        display: inline;
        a{
          background-color: black;
          color: #ddd;
          padding: 5px 10px;
          text-decoration: none;
        }
      }
    }
  }
</style>
