from flask import Flask, render_template, request, jsonify
import openai

app = Flask(__name__)

# OpenAI ChatGPT API 키 설정
openai.api_key = ''  # 여러분의 ChatGPT API 키로 대체해주세요.

# templates 및 static 디렉토리 설정
app.template_folder = 'templates'
app.static_folder = 'static'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_response', methods=['POST'])
def get_response():
    user_message = request.form['user_message']

    # ChatGPT API에 요청을 보내 응답을 받아옴
    response = openai.Completion.create(
        engine="davinci-codex",  # 엔진은 ChatGPT의 codex 버전을 사용합니다.
        prompt=user_message,
        max_tokens=150,  # 원하는 답의 최대 길이를 지정합니다.
        n=1,  # 생성할 답변의 수를 지정합니다.
        stop=None,  # 생성된 텍스트 중지 기준을 지정합니다.
        temperature=0.7  # 생성된 텍스트의 다양성을 조절합니다.
    )

    # API 응답에서 답변을 추출합니다.
    ai_response = response['choices'][0]['text'].strip()

    return jsonify({'ai_response': ai_response})

if __name__ == '__main__':
    app.run(debug=True)
