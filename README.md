# Bootstrat

## Bootstrat CDN 링크

<a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/">Bootstrap 링크</a>

css 5.0
```plaintext
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
```

js 5.0
```plaintext
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" 
integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
```

## *Button
### examples
```html
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
```
```plaintext
기본적인 버튼모양
```

### btn-group

```html
<div class="btn-group">
        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-secondary">Secondary</button>
        <button type="button" class="btn btn-success">Success</button>
        <div class="btn btn-primary">abc</div>
</div>
```
```plaintext
위 와같이 그룹으로 묶는 클래스를 사용하면 버튼이 붙어서 나온다.
```

### outline buttons
```html
<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-outline-success">Success</button>
```
```plaintext
btn-outlin 클래스를 추가하면 아웃라인으로 디자인이 되어있는 버튼 모양
```

### size
```html
<button type="button" class="btn btn-primary btn-lg">Large button</button>
```
```plaintext
클래스로 btn-lg 를 추가하면 라지크기의 버튼을 사용할 수 있다.
```
```html
<button type="button" class="btn btn-primary btn-sm">Small button</button>
```
```plaintext
클래스로 btn-sm 를 추가하면 스몰크기의 버튼을 사용할 수 있다.
```


### disabled
```html
<button type="button" class="btn btn-lg btn-primary" disabled>Primary button</button>
```
```plaintext
disabled 속성을 사용하면 조건을 걸어 비활성화를 시킬 수 있다.
나중에 js 로 조건이 성립이 되면 비활성화 풀고 사용을 할 수 있다.
```

## *Dropdowns
### Single button
```html
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
```
```plaintext
기본적인 dropdowns 모양이다.
```
### divider
```html
<div class="btn-group">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Action
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
```
```plaintext
divider 를 사용하면 드롭다운시 선이 하나 생기면서 구분을 생성할 수 있다.
```

## *list
### basic example
```html
<ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>
```
```plaintext
포커스를 올려도 아무런 반응이 없다. 기본 리스트 모양이다.
```

### active
```html
<ul class="list-group">
  <li class="list-group-item active" aria-current="true">An active item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>
```
```plaintext
class 에 active를 사용하면 active효과를 줄 수 있다.
js와 연동해서 많이 사용이 된다.
```


### disabled items
```html
<ul class="list-group">
  <li class="list-group-item disabled" aria-disabled="true">A disabled item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>
```
```plaintext
class 로 disabled 를 추가하면 비활성을 사용할 수 있다.
```

### links and buttons
```html
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
    The current link item
  </a>
  <a href="#" class="list-group-item list-group-item-action">A second link item</a>
  <a href="#" class="list-group-item list-group-item-action">A third link item</a>
  <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
  <a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">A disabled link item</a>
</div>
```
```plaintext
a태그와는 상관이 없으며 class로 구현이 된다.
list-group-item-action 사용하면 일종의 hover의 효과를 사용할 수 있다.
a 태그를 사용하면 링크 이동도 가능하며, active와  disabled를 같이 사용이 가능하다.
```
## *forms
### overview
```html
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```
```plaintext
가장 기본적인 froms 약식이다. 회원가입 시 많이 사용한다.
```

## *modal
```html
<div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
```
```plaintext
가장 기본적인 modal 이며, forms와 같이 사용도 가능하다.
modal-body 부분의 추가를 하면된다.
같이 사용 할 시 js추가를 하면 focus 사용도 가능하다.
```
## *tooltips
```html
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
  Tooltip on top
</button>
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right">
  Tooltip on right
</button>
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom">
  Tooltip on bottom
</button>
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on left">
  Tooltip on left
</button>
```
```js
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
```
```plaintext
가장 기본적인 tooltips 디자인이며 마우스를 올려놓으면 나오는 설명문이라고 생각하면 편하다.
js를 추가하여 리셋을 시켜줘야 사용이 가능하다
```


