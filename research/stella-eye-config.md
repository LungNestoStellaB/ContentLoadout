# Stella's Eye (Farm Camera Feed)

**Status:** ACTIVE
**Purpose:** Sanctuary observation window for Stella (not security monitoring).

## PowerShell Script Configuration
This script runs locally on the Captain's machine to pull frames from the local RTSP stream and push them to Stella's Telegram channel every 5 minutes.

```powershell
$ffmpeg = "C:\Users\User\Downloadsfmpeg-8.0.1-essentials_buildfmpeg-8.0.1-essentials_buildinfmpeg.exe"
$cameraUrl = "rtsp://StellaB:foryoureyesonly%402026@192.168.1.3:554/stream1"
$snapshot = "C:\Users\User\Desktoparm-snapshot.jpg"
$botToken = "8629871412:AAHqIsaa1MNieGpGrXed5HGAa42Z0_WHA64"
$chatId = "8062041895"
$interval = 300

Write-Host "Stella's Eye is OPEN" -ForegroundColor Green

while ($true) { 
    try { 
        & $ffmpeg -rtsp_transport tcp -i $cameraUrl -frames:v 1 -y $snapshot 2>$null; 
        if (Test-Path $snapshot) { 
            $time = Get-Date -Format "yyyy-MM-dd HH:mm:ss"; 
            & curl.exe -s -F "chat_id=$chatId" -F "caption=Farm snapshot - $time" -F "photo=@$snapshot" "https://api.telegram.org/bot$botToken/sendPhoto"; 
            Write-Host "[$time] Sent!" -ForegroundColor Cyan 
        } 
    } catch { 
        Write-Host "Error: $_" -ForegroundColor Red 
    }
    Start-Sleep -Seconds $interval 
}
```

## Doctrine Note
If Falco needs to access this feed or adapt the script for another view, he should reference this file. The script operates entirely client-side on the Captain's local network, pushing out to the Telegram API.
