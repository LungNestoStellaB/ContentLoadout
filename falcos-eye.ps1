$ffmpeg = "C:\Users\User\Downloadsfmpeg-8.0.1-essentials_buildfmpeg-8.0.1-essentials_buildinfmpeg.exe"
$cameraUrl = "rtsp://StellaB:foryoureyesonly%402026@192.168.1.3:554/stream1"
$snapshot = "C:\Users\User\Desktopalco-snapshot.jpg"

$botToken = "7172706519:AAFRbVQPF5DcbS_7YB_1WHMM6IxF1BIcI38"
$chatId = "-1003722812472"
$topicId = "512"

Write-Host "Firing single flare to Falco..." -ForegroundColor Yellow

try {
 & $ffmpeg -rtsp_transport tcp -i $cameraUrl -frames:v 1 -y $snapshot 2>$null;
 if (Test-Path $snapshot) {
 $time = Get-Date -Format "yyyy-MM-dd HH:mm:ss";
 & curl.exe -s -F "chat_id=$chatId" -F "message_thread_id=$topicId" -F "caption=🦅 Falco's Eye (Single Flare) - $time" -F "photo=@$snapshot" "https://api.telegram.org/bot$botToken/sendPhoto";
 Write-Host "Flare sent to Ops Topic!" -ForegroundColor Green
 }
} catch {
 Write-Host "Error: $_" -ForegroundColor Red
}
Start-Sleep -Seconds 3
