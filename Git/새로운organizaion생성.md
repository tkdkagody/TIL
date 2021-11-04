# new organization 생성해서 팀프로젝트 레포지토리 세팅하기 (무료/유료)

## 레포생성

#### upstream 레포

- 같은 방식으로 새 repo를 생성한다. (upstream 레포)
- git init
- git remote add origin(upstream 등 설정한 이름) > <레포주소>
- (혹시 exist하다고 실패할 경우) git remote rm origin
- dev 브랜치 생성 후 커밋&푸시

#### origin 레포

- upstream레포를 fork한 후 로컬에 clone (이때 organization 세팅에서 fork enable하게 수정해주어야함)
- git init
- git remote add upstream <레포주소> (이름이 upstream일 경우! 이름 잘 확인하기)
- git fetch upstream
- git remote -v : 현재 remote 상태를 알 수 있다.
- pull upstream 등 모두 가능!

---
