// 메시지 전송 및 GPT-3.5 API 호출 예시
async function sendMessage() {
    var userMessage = document.getElementById('user-message').value;

    // 사용자 메시지를 채팅 박스에 표시
    document.getElementById('chat-box').innerHTML += '<p>User: ' + userMessage + '</p>';
    
    try {
        // GPT-3.5 API를 통해 응답 메시지를 얻어옴
        var responseText = await getGptResponse(userMessage);
        // 얻어온 응답 메시지를 채팅 박스에 표시
        document.getElementById('chat-box').innerHTML += '<p>AI: ' + responseText + '</p>';
    } catch (error) {
        console.error("Error fetching GPT-3.5 API response:", error);
    }

    // 입력 창 초기화
    document.getElementById('user-message').value = '';
}

// GPT-3.5 API 호출 예시
function getGptResponse(userMessage) {
    // 실제로는 GPT-3.5 API에 요청을 보내고 응답을 처리하는 코드를 작성해야 합니다.
    // 예시로 비동기적으로 처리되는 가정입니다.
    return new Promise((resolve, reject) => {
        // 사용자 메시지를 GPT-3.5 API에 전송하고 응답을 받아옴
        // 이 부분은 실제 API 호출 코드로 대체되어야 합니다.
        setTimeout(() => {
            const responseText = "AI response for: " + userMessage;
            resolve(responseText);
        }, 2000); // 예시로 2초 딜레이를 줌
    });
}
