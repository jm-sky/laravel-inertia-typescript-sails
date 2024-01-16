<?php

namespace App\Http\Controllers;

use App\Models\Feed;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $feeds = Feed::query()->with('user')->latest()->get();

        return Inertia::render('Dashboard', [
            'feeds' => $feeds,
            'u' => $feeds->first()->user,
        ]);
    }

    public function create()
    {
        return Inertia::render('Feeds/Create');
    }

    public function store(Request $request)
    {
        Feed::create([
            'content' => 'Lorem ipsum',
            'user_id' => $request->user()->id,
        ]);

        return redirect('/dashboard');
    }
}
