FROM jboss/wildfly
ADD devops.war /opt/jboss/wildfly/standalone/deployments/
