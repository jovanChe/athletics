#!/bin/bash

# Conversation Archive Script
# Usage: ./scripts/archive-conversation.sh "conversation-title"

if [ $# -eq 0 ]; then
    echo "Usage: $0 \"conversation-title\""
    echo "Example: $0 \"auth-system-implementation\""
    exit 1
fi

CONVERSATION_TITLE="$1"
DATE=$(date +"%Y-%m-%d")
TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")
ARCHIVE_DIR="docs/conversations"
ARCHIVE_FILE="$ARCHIVE_DIR/${DATE}-${CONVERSATION_TITLE// /-}.md"

# Create archive directory if it doesn't exist
mkdir -p "$ARCHIVE_DIR"

# Create conversation archive file
cat > "$ARCHIVE_FILE" << EOF
# Conversation: $CONVERSATION_TITLE

**Date**: $TIMESTAMP  
**Project**: Athletics Auth Boilerplate  
**Repository**: https://github.com/jovanChe/athletics.git

## Summary

[Add a brief summary of what was discussed/accomplished]

## Key Decisions

- [Decision 1]
- [Decision 2]
- [Decision 3]

## Implementation Details

### What was implemented:
- [Feature 1]
- [Feature 2]

### What was learned:
- [Learning 1]
- [Learning 2]

## Code Changes

### Files Modified:
- [File 1]
- [File 2]

### New Files Created:
- [File 1]
- [File 2]

## Commands Used

\`\`\`bash
# Add relevant commands here
\`\`\`

## Next Steps

- [ ] [Next step 1]
- [ ] [Next step 2]

## Notes

[Any additional notes, context, or important information]

---

*Archived on: $TIMESTAMP*
EOF

echo "✅ Conversation archive created: $ARCHIVE_FILE"
echo "📝 Edit the file to add your conversation details"
echo "🔗 Add to git: git add $ARCHIVE_FILE"
