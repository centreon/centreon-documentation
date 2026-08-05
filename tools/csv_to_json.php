<?php
if (php_sapi_name() !== 'cli') {
    die("This script must be run from the command line.\n");
}

// Ensure arguments were provided: topology type + CSV file
if ($argc < 2) {
    die("Usage: php " . $argv[0] . "<csv_file>\n");
}

$csvFile = $argv[1];

if (!file_exists($csvFile)) {
    die("Error: CSV file not found: $csvFile\n");
}

$handle = fopen($csvFile, 'r');
if (!$handle) {
    die("Error: Unable to open CSV file: $csvFile\n");
}

// Read the header row from the CSV file
$headers = fgetcsv($handle);
if ($headers === false) {
    die("Error: CSV file is empty or improperly formatted.\n");
}

// Clean header names
$columns = array_map(function($header) {
    return trim(ltrim($header, '#'));
}, $headers);

// Build column map
$colMap = [];
foreach ($columns as $index => $name) {
    $colMap[$name] = $index;
}

// Define base columns to extract
$desiredColumns = [
    "complete_menu_en",
    "complete_menu_fr",
    "Topology ID",
    "Topology Page",
    "Documentation URL"
];

$result = [];

// Process rows
while (($row = fgetcsv($handle)) !== false) {
    if (isset($colMap["To generate"]) && isset($row[$colMap["To generate"]]) &&
        trim($row[$colMap["To generate"]]) === "1") {

        $dataEntry = [];
        foreach ($desiredColumns as $colName) {
            $dataEntry[$colName] = isset($colMap[$colName]) ? $row[$colMap[$colName]] : null;
        }

        $docUrl = trim($dataEntry["Documentation URL"]);

        // Skip if empty or invalid URL
        if (empty($docUrl) || !filter_var($docUrl, FILTER_VALIDATE_URL)) {
            continue;
        }

        // Key selection: Topology Page (if it starts with '/') else Topology ID
        $topologyPage = isset($dataEntry["Topology Page"]) ? $dataEntry["Topology Page"] : '';
        $topologyId   = isset($dataEntry["Topology ID"]) ? $dataEntry["Topology ID"] : '';

        if (!empty($topologyPage) && strpos($topologyPage, '/') === 0) {
            $key = $topologyPage;
        } else {
            $key = $topologyId;
        }

        $result[$key] = [
            "menu_en" => $dataEntry["complete_menu_en"],
            "menu_fr" => $dataEntry["complete_menu_fr"],
            "Topology ID"    => $dataEntry["Topology ID"],
            "Topology Page"  => $dataEntry["Topology Page"],
            "Documentation"  => $docUrl
        ];
    }
}

fclose($handle);

// Output JSON
echo json_encode($result, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);