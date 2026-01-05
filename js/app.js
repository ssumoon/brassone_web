  window.addEventListener('scroll', function() {
  // 현재 스크롤 위치 가져오기
  const scrollPosition = window.scrollY;

  // 스크롤이 100px 이상일 때 헤더에 'fixed' 클래스 추가
  const header = document.getElementById('header');
  if (scrollPosition > 100) {
  header.classList.add('fixed'); // 클래스 추가
} else {
  header.classList.remove('fixed'); // 클래스 제거 (선택 사항)
}
});