FROM python:3
ENV PYTHONUNBUFFERED=1
WORKDIR /app/backend
COPY ./backend/requirements.txt /app/backend/
RUN pip install --upgrade pip
RUN pip install gunicorn
RUN pip install -r requirements.txt
COPY ./backend /app/backend/
