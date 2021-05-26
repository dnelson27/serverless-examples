FROM public.ecr.aws/lambda/python:3.8
COPY ./src .
RUN python -m pip install requirements.txt
CMD ["app.handler"]