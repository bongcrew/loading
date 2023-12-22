$(function () {
  // 대상을 변수에 저장
  const $window = $(window);
  const $body = $('body');
  const $loading = `<div class="loading">
  <div class="spinner"></div>
  <div class="lds-heart"><div></div></div>
</div>`;

  // body 마지막 부분에 집어넣기
  $body.append($loading);
  const $target = $('.loading');
  // 로딩이 완료되면 (Load)
  $window.on('load', function () {
    // 너무 빨리 사라지므로 조금있다가 사라지게끔
    // setTimeout(동작, 시간)
    setTimeout(function () {
      $target.fadeOut().remove();
    }, 1000);
  });
});
