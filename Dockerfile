FROM ubuntu

RUN apt-get update
RUN apt-get install -y python sudo curl

RUN curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
RUN sudo apt-get install -y nodejs
