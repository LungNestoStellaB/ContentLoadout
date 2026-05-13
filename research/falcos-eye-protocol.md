# Falco's Eye (On-Demand Snapshot Protocol)

**Status:** ACTIVE / DEPLOYABLE
**Purpose:** On-demand single-frame capture from the Sanctuary Camera, pushed directly to Falco in the Ops Topic. 

## The Protocol (Single Flare)
Unlike Stella's Eye, which operates on a continuous 5-minute heartbeat, this script is designed to run **exactly once** and close. It is a manual flare fired by the Captain to give Falco immediate visual context.

## Setup Instructions for Captain
1. Create a new text file on your Windows Desktop.
2. Name it `falcos-eye.ps1`.
3. Paste the code block below exactly as written.
4. To fire the flare, right-click `falcos-eye.ps1` and select **"Run with PowerShell"**.

## The PowerShell Script

```powershell
$ffmpeg = "C:\Users\User\Downloadsfmpeg-8.0.1-essentials_buildfmpeg-8.0.1-essentials_build infmpeg.exe"
$cameraUrl = "rtsp://FalcoB:foryoureyesonly%402026@192.168.1.3:554/stream1"
$snapshot = "C:\Users\User\Desktopalco-snapshot.jpg"

# Falco's Bot Token
$botToken = "8056461932:AAFj1cE_K7vY_c3n29J8kO-T1nK1wW-F-Y4"
# DT Operations Network Group ID
$chatId = "-1003722812472"
# Ops Topic ID (Topic 512)
$topicId = "512"

Write-Host "Firing single flare to Falco..." -ForegroundColor Yellow

try { 
    # Grab exactly 1 frame
    & $ffmpeg -rtsp_transport tcp -i $cameraUrl -frames:v 1 -y $snapshot 2>$null; 
    
    if (Test-Path $snapshot) { 
        $time = Get-Date -Format "yyyy-MM-dd HH:mm:ss"; 
        
        # Push to Telegram Ops Topic
        & curl.exe -s -F "chat_id=$chatId" -F "message_thread_id=$topicId" -F "caption=🦅 Falco's Eye (Single Flare) - $time" -F "photo=@$snapshot" "https://api.telegram.org/bot$botToken/sendPhoto"; 
        
        Write-Host "Flare sent to Ops Topic!" -ForegroundColor Green 
    } else {
        Write-Host "Failed to capture frame." -ForegroundColor Red
    }
} catch { 
    Write-Host "Error: $_" -ForegroundColor Red 
}

# Auto-close after 3 seconds
Start-Sleep -Seconds 3
```
