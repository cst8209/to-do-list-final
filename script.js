const items = [
  { task: 'Buy Milk', complete: false },
  { task: 'Feed Cat', complete: true },
  { task: 'Clean Room', complete: false },
  { task: 'Make Dinner', complete: false }
]

/**
 * createElement
 * @param type (string) - element type
 * @param props (object) - object containing a list of attributes
 * @param children (element or string) - element or string to append to element
 * @returns element
 */
function createElement (type, props, ...children) {
  const $el = document.createElement(type)
  for (const key in props) {
    $el[key] = props[key]
  }
  $el.append(...children)
  return $el
}

// HTML Elements
const $container = document.querySelector('#container')

/*
<ul class="list-group">
  <li class="list-group-item">
    <input type="checkbox" class="form-check-input me-2">
    <label class="form-check-label">Buy Milk</label>
  </li>
  <li class="list-group-item">
    <input type="checkbox" class="form-check-input me-2" checked>
    <label class="form-check-label">Feed Cat</label>
  </li>
</ul>
*/

// Create List Element
const $list = document.createElement('ul')
$list.className = 'list-group'

for (const item of items) {
  // classic approach
  // const $item = document.createElement('li')
  // $item.className = 'list-group-item'
  
  // const $input = document.createElement('input')
  // $input.className = 'form-check-input me-3'
  // $input.type = 'checkbox'
  // $input['checked'] = item.complete

  // const $label = document.createElement('label')
  // $label.className = 'form-check-label'
  // $label.textContent = item.task
  // $item.append($input, $label)
  // $list.append($item)

  // abstract approach
  $list.append(createElement(
    'li',
    { className: 'list-group-item' },
    createElement('input', { 
      type: 'checkbox', 
      checked: item.complete, 
      className: 'form-check-input me-3' 
    }),
    createElement('label', { className: 'form-check-label' }, item.task)
  ))
}

$container.append($list)