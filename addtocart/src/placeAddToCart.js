import { render } from 'solid-js/web'
import AddToCart from './AddToCart'

export default function placeAddTooCart(el, id) {
  render(() => <AddToCart id={id} />, el)
}
