## mysql linux에서 완전삭제

1. 시스템에 남아있는 mysql 삭제하기
   `sudo apt-get remove --purge mysql*`

2. 깨끗이 지워졌는지 확인하기
   `dpkg -l | grep mysql`

3. 남아있는 관련파일 개별적으로 제거해주기
   `sudo apt-get remove --purge [이름]`

4. 나머지 정리

`sudo rm -rf /etc/mysql /var/lib/mysql`
`sudo apt-get autoremove`
`sudo apt-get autoclean`

## mysql 설치
