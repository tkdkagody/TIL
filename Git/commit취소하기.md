# commit 취소하기

- commit 목록 확인
  git log

- 방법1) commit취소 + 해당 파일들 staged상태로 워킹 디렉터리 보존
  git reset --soft HEAD^
- 방법2) commit취소 + 해당 파일들 unstaged상태로 워킹디렉토리 보존
  git reset HEAD^
- 방법2-1) 위와 동일 + 마지막 2개 commit 취소
  git reset HEAD~2
- 방법3) commit취소 + 해당 파일들 unstaged상태로 워킹디렉토리 삭제
  git reset --hard HEAD^



