import ListItem from './ListItem'
import styles from './sass/List.module.scss'

export const List = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <ListItem imagePath='https://picsum.photos/id/75/1024/300'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin justo at turpis egestas fringilla at vel augue. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Vestibulum vehicula, sem id vulputate ultricies, ipsum urna aliquam ipsum, nec ultricies magna quam sed
            ligula. Donec eget leo libero. Donec dapibus dapibus lectus, sit amet cursus turpis malesuada in. Nam eu quam bibendum, hendrerit lectus a, dapibus
            felis. Pellentesque iaculis sem et quam imperdiet tempor. Mauris erat tortor, facilisis quis leo sed, tempus placerat enim. Proin feugiat hendrerit
            aliquam. In convallis vehicula odio, non porta risus porttitor eget. Duis et nunc quis urna iaculis egestas. In aliquet neque lorem, sit amet
            malesuada risus ornare et. Ut auctor pretium metus, ut porttitor neque.
          </p>
          <p>
            Cras id velit vel libero viverra posuere. Curabitur vitae efficitur enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Ut venenatis sollicitudin orci quis vehicula. Etiam auctor eros vel sem pretium, id vehicula felis euismod. Quisque ullamcorper, est
            et tristique pulvinar, sapien lorem consequat mauris, nec dictum ipsum est eget odio. Curabitur quam eros, consequat eu porttitor in, volutpat ut
            urna. Vestibulum massa urna, dignissim nec dui id, maximus pretium nunc. Integer at pulvinar diam. Quisque quis vulputate purus. Cras tristique nisl
            id neque auctor cursus.
          </p>
        </ListItem>
        <ListItem imagePath='https://picsum.photos/id/1068/1024/300'>
          <p>
            Ut ultricies commodo lectus ut venenatis. Aenean mollis vel sapien sed suscipit. Integer lobortis nulla nec sagittis elementum. In accumsan arcu
            eget risus aliquam ullamcorper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus nec fringilla nibh.
            Nunc sed velit sit amet nisi sollicitudin facilisis eget ut ante. Sed feugiat neque pretium ex malesuada imperdiet. Donec sit amet scelerisque ex.
            In hac habitasse platea dictumst. Suspendisse efficitur ante et velit condimentum tincidunt. Vestibulum iaculis neque eget diam varius consectetur.
            Vestibulum sollicitudin libero sit amet maximus lacinia.
          </p>
        </ListItem>
        <ListItem imagePath='https://picsum.photos/id/26/1024/300'>
          <p>
            Mauris et erat feugiat, lacinia justo eu, pulvinar lacus. Phasellus eu velit mi. Donec accumsan tellus justo, eu scelerisque erat ultrices eget.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum varius eleifend magna porttitor tincidunt.
            Etiam vitae mi sit amet metus tincidunt tempus. Nam in diam suscipit, volutpat dolor et, aliquam lacus.
          </p>

          <p>
            Curabitur sed rutrum risus, ut rutrum nisl. Nam maximus pulvinar luctus. Phasellus eu posuere turpis, eget bibendum mauris. Proin in sem maximus,
            facilisis eros pulvinar, sodales nunc. Quisque rhoncus gravida maximus. Aliquam posuere auctor eros sed pellentesque. Duis pulvinar et libero id
            mollis. Donec vitae magna odio. Sed lobortis lobortis neque, sed vulputate est consequat sit amet. Donec accumsan erat ac leo fermentum euismod.
            Vestibulum tristique, tellus vel facilisis ultricies, mauris mauris interdum erat, in varius velit orci quis magna. Donec vitae molestie ante. Nam
            sit amet diam luctus, fermentum purus ullamcorper, aliquet diam. Aenean scelerisque arcu eget dictum ullamcorper. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vestibulum pellentesque ullamcorper laoreet.
          </p>
        </ListItem>
        <ListItem>
          <p>
            Mauris et erat feugiat, lacinia justo eu, pulvinar lacus. Phasellus eu velit mi. Donec accumsan tellus justo, eu scelerisque erat ultrices eget.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum varius eleifend magna porttitor tincidunt.
            Etiam vitae mi sit amet metus tincidunt tempus. Nam in diam suscipit, volutpat dolor et, aliquam lacus.
          </p>

          <p>
            Curabitur sed rutrum risus, ut rutrum nisl. Nam maximus pulvinar luctus. Phasellus eu posuere turpis, eget bibendum mauris. Proin in sem maximus,
            facilisis eros pulvinar, sodales nunc. Quisque rhoncus gravida maximus. Aliquam posuere auctor eros sed pellentesque. Duis pulvinar et libero id
            mollis. Donec vitae magna odio. Sed lobortis lobortis neque, sed vulputate est consequat sit amet. Donec accumsan erat ac leo fermentum euismod.
            Vestibulum tristique, tellus vel facilisis ultricies, mauris mauris interdum erat, in varius velit orci quis magna. Donec vitae molestie ante. Nam
            sit amet diam luctus, fermentum purus ullamcorper, aliquet diam. Aenean scelerisque arcu eget dictum ullamcorper. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vestibulum pellentesque ullamcorper laoreet.
          </p>
        </ListItem>
      </div>
    </div>
  )
}

export default List
