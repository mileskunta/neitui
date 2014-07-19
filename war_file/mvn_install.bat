@set MAVEN_OPTS=-Xmx256m
@call mvn clean install -Dmaven.test.skip=true
@pause