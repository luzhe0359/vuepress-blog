<template>
  <div>
    <div
      class="features"
      style="transition: transform 0.25s ease-in-out 0.16s, opacity 0.25s ease-in-out 0.16s; transform: translateY(0px); opacity: 1;"
    >
      <template
        v-for="(item, idx) in linkData"
        :key="idx"
      >
        <a
          :href="item.link"
          class="feature link"
          role="navigation"
        >
          <img
            :src="item.avatar"
            :alt="item.name"
          >
          <div>
            <h2>{{ item.name }}</h2>
            <p>{{ item.desc }}</p>
          </div>
        </a>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
const linkData = [
  {
    name: "足各路的博客",
    link: "https://www.zugelu.com/",
    desc: "要逼自己优秀, 然后骄傲的活着。",
    avatar: "https://oss.zugelu.com/other/logo.webp",
  },
];
</script>
<style scoped lang="scss">
.features {
  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
  align-items: stretch;
  justify-content: center;

  overflow: hidden;

  margin: 0 -2rem;
  padding: 1.2rem 0;
  border-top: 1px solid var(--border-color);

  transition: border-color var(--color-transition);

  @media (max-width: hope-config.$mobile) {
    margin: 0 -1.5rem;
  }
}

.feature {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-basis: calc(33% - 4rem);

  overflow: hidden;

  margin: 0.5rem;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;

  text-align: center;

  transition: transform 0.3s, box-shadow 0.3s;

  @media (min-width: hope-config.$pc) {
    flex-basis: calc(33% - 4rem);
  }

  @media (max-width: hope-config.$pad) {
    flex-basis: calc(50% - 4rem);
  }

  @media (max-width: hope-config.$tablet) {
    font-size: 0.95rem;
  }

  @media (max-width: hope-config.$mobile) {
    flex-basis: calc(100%);
    margin: 0.5rem 0;
    border-radius: 0;
    font-size: 0.9rem;
  }

  &.link {
    cursor: pointer;
  }

  &:hover {
    box-shadow: 0 2px 12px 0 var(--card-shadow);
    transform: scale(1.05);
  }

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-right: 1rem;
  }

  h2 {
    margin: 0.25rem 0;
    border-bottom: none;

    color: var(--text-color-light);

    font-weight: bold;
    font-size: 1.25rem;

    @media (max-width: hope-config.$mobile) {
      font-size: 1.2rem;
    }
  }

  p {
    margin: 0;
    color: var(--text-color-lighter);
    line-height: 1.4;
  }
}
</style>