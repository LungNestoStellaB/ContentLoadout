#!/bin/bash
TARGET_DIR="incoming_loadout"
TOTAL=0
PASS=0
FAIL=0

echo "🦅 FALCO QA AUDIT: THE LOADOUT"
echo "=============================="

for file in $(find $TARGET_DIR -type f -name "*.md"); do
  TOTAL=$((TOTAL+1))
  
  # Check for mandatory sections
  has_title=$(grep -ic "Title" "$file")
  has_desc=$(grep -ic "Description" "$file")
  has_script=$(grep -ic "Clean Script" "$file")
  has_luggage=$(grep -ic "Luggage" "$file")
  
  # Check for stage directions (camera, angle, shot, music, etc.) in the Clean Script section
  # This is a basic heuristic. A full LLM read might be needed for nuance, but this catches obvious errors.
  script_content=$(awk '/Clean Script/{flag=1; next} /Luggage/{flag=0} flag' "$file")
  
  # Look for brackets which often denote stage directions like [Camera pans] or (Music fades)
  has_stage_dirs=$(echo "$script_content" | grep -Ec "\[|\(|\*")
  
  if [ "$has_title" -ge 1 ] && [ "$has_desc" -ge 1 ] && [ "$has_script" -ge 1 ] && [ "$has_luggage" -ge 1 ] && [ "$has_stage_dirs" -eq 0 ]; then
    PASS=$((PASS+1))
    echo "✅ PASS: $file"
  else
    FAIL=$((FAIL+1))
    echo "❌ FAIL: $file"
    [ "$has_title" -eq 0 ] && echo "   - Missing Title"
    [ "$has_desc" -eq 0 ] && echo "   - Missing Description"
    [ "$has_script" -eq 0 ] && echo "   - Missing Clean Script"
    [ "$has_luggage" -eq 0 ] && echo "   - Missing Luggage"
    [ "$has_stage_dirs" -gt 0 ] && echo "   - Contains stage directions in Clean Script"
  fi
done

echo "=============================="
echo "TOTAL: $TOTAL | PASS: $PASS | FAIL: $FAIL"

if [ "$FAIL" -eq 0 ]; then
  echo "STATUS: 🟢 GREEN (Ready for Deployment)"
else
  echo "STATUS: 🔴 RED (Needs Fixing)"
fi
